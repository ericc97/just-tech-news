const { Model, DataTypes } = require('sequelize');
const { User } = require('./User');
const sequelize = require('../config/connection');

// Create our post model
class Post extends Model {}

// Create fields /columns for post model 
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
             
            type: DataTypes.STRING,
            allowNull: false
            
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
    

);

module.exports = Post;