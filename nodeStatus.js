const k8sApi = require('@kubernetes/client-node');
const json = require('json');
const kc = new k8sApi.KubeConfig();
kc.loadFromDefault();
const k8s = kc.makeApiClient(k8sApi.CoreV1Api);
k8s.listNode().then((res) => {
    for(var i in res.body.items) {

        if(res.body.items[i].status.conditions[4].status == "True"){
            var node_status = "Ready"
        }
        console.log(res.body.items[i].metadata.name, res.body.items[i].metadata.creationTimestamp, res.body.items[i].status.addresses[1].address, node_status);
    };
});
module.exports
