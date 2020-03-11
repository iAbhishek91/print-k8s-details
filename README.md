# Consuming metadata of K8s in application

## Applications port

1222

## Pass environment variable in the pod

path: /

- POD_NAME
- POD_NAMESPACE
- POD_IP_ADDRESS
- SERVICE_ACCOUNT
- NODE_NAME

## Pass downwardAPI volume in the pod

path: /downwardAPI

- LABELS
- ANNOTATIONS
