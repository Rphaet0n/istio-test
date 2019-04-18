### Yaml файлы в папке manifest
### сначало необходимо собрать образ(docker build -t project:v1 .)
### затем можно сделать kubectl -f apply manifest/*
### custom-установка istio:
#### kubectl apply -f install/kubernetes/helm/helm-service-account.yaml
#### helm init --service-account tiller
#### helm install install/kubernetes/helm/istio-init  --name istio-init   --namespace istio-system
#### helm install install/kubernetes/helm/istio \
  --set global.mtls.enabled=false \
  --set tracing.enabled=true \
  --set kiali.enabled=true \
  --set grafana.enabled=true \
  --set pilot.resources.requests.memory="512Mi" \
  --set gateways.istio-ingressgateway.type=NodePort \
  --name istio \
  --namespace istio-system