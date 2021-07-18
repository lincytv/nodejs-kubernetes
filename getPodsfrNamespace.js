const k8s = require('@kubernetes/client-node');
const json = require('json');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
var namespace = `argocd`
k8sApi.listNamespacedPod(namespace).then(
    (response) => {
        for (const itemsKey in response.body.items) {
            console.log(response.body.items[itemsKey].metadata.name);
       }
    });
