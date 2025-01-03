import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const Instructor = sequelize.define('Instructor', {
    id: {
        type: DataTypes.STRING(5),
        primaryKey: true,
    }
    , name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
    , dept_name: {
        type: DataTypes.STRING(20),
    },
    salary: {
        type: DataTypes.DECIMAL(8, 2),
        validate: {
            min: 29000,
        },
    },
}, {
    tableName: 'instructor',
    timestamps: false,
})

const instructors = await Instructor.findAll();

instructors.forEach(instructor => {
    console.log(instructor.dataValues);
})


export default sequelize;