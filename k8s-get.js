const k8sApi = require('@kubernetes/client-node');
const json = require('json');
const fs = require('fs');
const kc = new k8sApi.KubeConfig();

kc.loadFromDefault();
const k8s = kc.makeApiClient(k8sApi.CoreV1Api);

function log(message){
    console.log(message);
}

function getNode() {
    k8s.listNode().then((res) => {
        for(let i in res.body.items) {
            console.log(res.body.items[i].metadata.name, res.body.items[i].metadata.creationTimestamp);
            const nodeIP = (res.body.items[i].metadata.annotations);
            console.log(nodeIP);
        };
    });
};
function getNamespace(namespace){
    k8s.listNamespace().then((response) => {
        for (let i in response.body.items) {
            console.log(response.body.items[i].metadata.name);
            //k8sApi.deleteNamespace(namespace.metadata.name, {} /* delete options */);
        };
    },
        (err) => {
            console.log('Error!: ' + err);
        },
    );
};

module.exports.getNode = getNode;
module.exports.getNamespace = getNamespace;