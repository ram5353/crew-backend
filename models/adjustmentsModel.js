module.exports = (sequelize, Sequelize) => {

    const Adjustments = sequelize.define("adjustments", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        adjustment_type: {
            type: Sequelize.STRING
        },
        adjustment_amount: {
            type: Sequelize.DECIMAL(10, 2)
        },
        adjustment_date: {
            type: Sequelize.DATE
        },
        adjustment_description: {
            type: Sequelize.STRING
        },
        adjustment_status: {
            type: Sequelize.STRING
        },
        adjustment_created_at: {
            type: Sequelize.DATE
        },
        adjustment_updated_at: {
            type: Sequelize.DATE
        }
    });

    return Adjustments;
}