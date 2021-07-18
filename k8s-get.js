const k8sApi = require('@kubernetes/client-node');
const json = require('json');
const fs = require('fs');
const kc = new k8sApi.KubeConfig();

kc.loadFromDefault();
const k8s = kc.makeApiClient(k8sApi.CoreV1Api);

function log(message){
    console.log(message);
};
// nodes 
function getNode() {
    k8s.listNode().then((res) => {
        for(let i in res.body.items) {
            console.log(res.body.items[i].metadata.name, res.body.items[i].metadata.creationTimestamp, res.body.items[i].status.addresses[1].address);
        };
    });
};
// namespaces
function getNamespace(){
    k8s.listNamespace().then((response) => {
        for (let i in response.body.items) {
            console.log(response.body.items[i].metadata.name);
        };
    },
        (err) => {
            console.log('Error!: ' + err);
        },
    );
};
// getPodsfromnamespaces

function getPodsfrNamespaces(ns){
    k8s.listNamespacedPod(ns).then((res) => {
        for (let i in res.body.items) {
            console.log(res.body.items[i].metadata.name, res.body.items[i].status.podIP);
        }; // end for
    }, //end inside api
    ); // end rest-api
};// end function

module.exports.getNode = getNode;
module.exports.getNamespace = getNamespace;
module.exports.getPodsfrNamespaces = getPodsfrNamespaces;