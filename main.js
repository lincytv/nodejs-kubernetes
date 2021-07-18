const logs = require('./k8s-get');
var namespace = {
    metadata: {
        name: 'test',
    },
};
//logs.getNamespace(namespace);
//logs.getNamespace(namespace);
//log.log("hello");
logs.getNode();
logs.getNamespace();