const activeConfig = typeof MQTT_CONFIG !== 'undefined' ? MQTT_CONFIG : {
    broker: "wss://broker.hivemq.com:8884/mqtt", // Public broker test URL
    username: "",
    password: "",
    clientId: "PublicDashboard_" + Math.random().toString(16).substring(2, 8)
};

const client = mqtt.connect(activeConfig.broker, {
    username: activeConfig.username,
    password: activeConfig.password,
    clientId: activeConfig.clientId
});
