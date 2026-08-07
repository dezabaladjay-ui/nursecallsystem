const activeConfig = typeof MQTT_CONFIG !== 'undefined' ? MQTT_CONFIG : {
    broker: "8489829bb9624d2b82642b5272686b5c.s1.eu.hivemq.cloud:8884/mqtt", // Public broker test URL
    username: "",
    password: "",
    clientId: "PublicDashboard_" + Math.random().toString(16).substring(2, 8)
};

const client = mqtt.connect(activeConfig.broker, {
    username: activeConfig.username,
    password: activeConfig.password,
    clientId: activeConfig.clientId
});
