const User = require('./User.js');
const Comment = require('./Comment.js');
const Post = require('./Post.js');

User.hasMany(Post,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete:'CASCADE',
});



module.exports = { 
User, Comment, Post };