/*! For license information please see 4625d262.8520a9e1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[674777],{444493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var s=t(824246),r=t(511151);const a={id:"k8s",title:"Deploying with Kubernetes",sidebar_label:"Kubernetes",description:"How to deploy Backstage to a Kubernetes cluster"},o=void 0,c={id:"deployment/k8s",title:"Deploying with Kubernetes",description:"How to deploy Backstage to a Kubernetes cluster",source:"@site/../docs/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/docs/deployment/k8s",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/k8s.md",tags:[],version:"current",frontMatter:{id:"k8s",title:"Deploying with Kubernetes",sidebar_label:"Kubernetes",description:"How to deploy Backstage to a Kubernetes cluster"},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/deployment/docker"},next:{title:"Heroku",permalink:"/docs/deployment/heroku"}},l={},i=[{value:"Testing locally",id:"testing-locally",level:2},{value:"Creating a namespace",id:"creating-a-namespace",level:2},{value:"Creating the PostgreSQL database",id:"creating-the-postgresql-database",level:2},{value:"Creating a PostgreSQL secret",id:"creating-a-postgresql-secret",level:3},{value:"Creating a PostgreSQL persistent volume",id:"creating-a-postgresql-persistent-volume",level:3},{value:"Creating a PostgreSQL deployment",id:"creating-a-postgresql-deployment",level:3},{value:"Creating a PostgreSQL service",id:"creating-a-postgresql-service",level:3},{value:"Creating the Backstage instance",id:"creating-the-backstage-instance",level:2},{value:"Creating a Backstage secret",id:"creating-a-backstage-secret",level:3},{value:"Creating a Backstage deployment",id:"creating-a-backstage-deployment",level:3},{value:"Creating a Backstage service",id:"creating-a-backstage-service",level:3},{value:"Further steps",id:"further-steps",level:2},{value:"Set up a more reliable volume",id:"set-up-a-more-reliable-volume",level:3},{value:"Expose the Backstage service",id:"expose-the-backstage-service",level:3},{value:"Update the Deployment image",id:"update-the-deployment-image",level:3}];function d(e){const n=Object.assign({p:"p",a:"a",em:"em",h2:"h2",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," is a system for deploying, scaling and\nmanaging containerized applications. Backstage is designed to fit this model and\nrun as a stateless application with an external PostgreSQL database."]}),"\n",(0,s.jsxs)(n.p,{children:["There are many different tools and patterns for Kubernetes clusters, so the best\nway to deploy to an existing Kubernetes setup is ",(0,s.jsx)(n.em,{children:"the same way"})," you deploy\neverything else."]}),"\n",(0,s.jsxs)(n.p,{children:["This guide covers basic Kubernetes definitions needed to get Backstage up and\nrunning in a typical cluster. The object definitions might look familiar, since\nthe Backstage software catalog\n",(0,s.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format",children:"also uses"})," the Kubernetes\nobject format for its entity definition files!"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-locally",children:"Testing locally"}),"\n",(0,s.jsxs)(n.p,{children:["To test out these concepts locally before deploying to a production Kubernetes\ncluster, first install ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"kubectl"}),", the\nKubernetes command-line tool."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, install ",(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"minikube"}),". This creates\na single-node Kubernetes cluster on your local machine:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Assumes Mac + Homebrew; see the minikube site for other installations\n$ brew install minikube\n$ minikube start\n\n...\nDone! kubectl is now configured to use "minikube" cluster and "default" namespace by default.\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can run ",(0,s.jsx)(n.code,{children:"kubectl"})," commands and have changes applied to the minikube\ncluster. You should be able to see the ",(0,s.jsx)(n.code,{children:"kube-system"})," Kubernetes pods running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods -A\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you're done with the tutorial, use ",(0,s.jsx)(n.code,{children:"minikube stop"})," to halt the cluster and\nfree up resources."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-namespace",children:"Creating a namespace"}),"\n",(0,s.jsxs)(n.p,{children:["Deployments in Kubernetes are commonly assigned to their own\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"namespace"}),"\nto isolate services in a multi-tenant environment."]}),"\n",(0,s.jsxs)(n.p,{children:["This can be done through ",(0,s.jsx)(n.code,{children:"kubectl"})," directly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create namespace backstage\nnamespace/backstage created\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, create and apply a Namespace definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/namespace.yaml\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: backstage\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/namespace.yaml\nnamespace/backstage created\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-postgresql-database",children:"Creating the PostgreSQL database"}),"\n",(0,s.jsx)(n.p,{children:"Backstage in production uses PostgreSQL as a database. To isolate the database\nfrom Backstage app deployments, we can create a separate Kubernetes deployment\nfor PostgreSQL."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-postgresql-secret",children:"Creating a PostgreSQL secret"}),"\n",(0,s.jsx)(n.p,{children:"First, create a Kubernetes Secret for the PostgreSQL username and password. This\nwill be used by both the PostgreSQL database and Backstage deployments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/postgres-secrets.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: postgres-secrets\n  namespace: backstage\ntype: Opaque\ndata:\n  POSTGRES_USER: YmFja3N0YWdl\n  POSTGRES_PASSWORD: aHVudGVyMg==\n"})}),"\n",(0,s.jsx)(n.p,{children:"The data in Kubernetes secrets are base64-encoded. The values can be generated\non the command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ echo -n "backstage" | base64\nYmFja3N0YWdl\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: Secrets are base64-encoded, but not encrypted. Be sure to enable\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",children:"Encryption at Rest"}),"\nfor the cluster. For storing secrets in Git, consider\n",(0,s.jsx)(n.a,{href:"https://learnk8s.io/kubernetes-secrets-in-git",children:"SealedSecrets or other solutions"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The secrets can now be applied to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/postgres-secrets.yaml\nsecret/postgres-secrets created\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-postgresql-persistent-volume",children:"Creating a PostgreSQL persistent volume"}),"\n",(0,s.jsxs)(n.p,{children:["PostgreSQL needs a persistent volume to store data; we'll create one along with\na ",(0,s.jsx)(n.code,{children:"PersistentVolumeClaim"}),". In this case, we're claiming the whole volume - but\nclaims can ask for only part of a volume as well."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/postgres-storage.yaml\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: postgres-storage\n  namespace: backstage\n  labels:\n    type: local\nspec:\n  storageClassName: manual\n  capacity:\n    storage: 2G\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  hostPath:\n    path: '/mnt/data'\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgres-storage-claim\n  namespace: backstage\nspec:\n  storageClassName: manual\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2G\n"})}),"\n",(0,s.jsx)(n.p,{children:"This file contains definitions for two different kinds, separated by a line with\na triple dash. This syntax is helpful if you want to consolidate related\nKubernetes definitions in a single file and apply them at the same time."}),"\n",(0,s.jsxs)(n.p,{children:["Note the volume ",(0,s.jsx)(n.code,{children:"type: local"}),"; this creates a volume using local disk on\nKubernetes nodes. More likely in a production scenario, you'd want to use a more\nhighly available\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes",children:"type of PersistentVolume"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Apply the storage volume and claim to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/postgres-storage.yaml\npersistentvolume/postgres-storage created\npersistentvolumeclaim/postgres-storage-claim created\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-postgresql-deployment",children:"Creating a PostgreSQL deployment"}),"\n",(0,s.jsx)(n.p,{children:"Now we can create a Kubernetes Deployment descriptor for the PostgreSQL database\ndeployment itself:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/postgres.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: postgres\n  namespace: backstage\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: postgres\n  template:\n    metadata:\n      labels:\n        app: postgres\n    spec:\n      containers:\n        - name: postgres\n          image: postgres:13.2-alpine\n          imagePullPolicy: 'IfNotPresent'\n          ports:\n            - containerPort: 5432\n          envFrom:\n            - secretRef:\n                name: postgres-secrets\n          volumeMounts:\n            - mountPath: /var/lib/postgresql/data\n              name: postgresdb\n      volumes:\n        - name: postgresdb\n          persistentVolumeClaim:\n            claimName: postgres-storage-claim\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you're not used to Kubernetes, this is a lot to take in. We're describing a\nDeployment (one or more instances of an application) that we'd like Kubernetes\nto know about in the ",(0,s.jsx)(n.code,{children:"metadata"})," block."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spec"})," block describes the desired state. Here we've requested Kubernetes\ncreate 1 replica (running instance of PostgreSQL), and to create the replica\nwith the given pod ",(0,s.jsx)(n.code,{children:"template"}),", which again contains Kubernetes metadata and a\ndesired state. The template ",(0,s.jsx)(n.code,{children:"spec"})," shows one container, created from the\n",(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/postgres",children:"published"})," ",(0,s.jsx)(n.code,{children:"postgres:13.2-alpine"})," Docker\nimage."]}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"envFrom"})," and ",(0,s.jsx)(n.code,{children:"secretRef"})," - this tells Kubernetes to fill environment\nvariables in the container with values from the Secret we created. We've also\nreferenced the volume created for the deployment, and given it the mount path\nexpected by PostgreSQL."]}),"\n",(0,s.jsx)(n.p,{children:"Apply the PostgreSQL deployment to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/postgres.yaml\ndeployment.apps/postgres created\n\n$ kubectl get pods --namespace=backstage\nNAME                        READY   STATUS    RESTARTS   AGE\npostgres-56c86b8bbc-66pt2   1/1     Running   0          21s\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the deployment by connecting to the pod:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it --namespace=backstage postgres-56c86b8bbc-66pt2 -- /bin/bash\nbash-5.1# psql -U $POSTGRES_USER\npsql (13.2)\nbackstage=# \\q\nbash-5.1# exit\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-postgresql-service",children:"Creating a PostgreSQL service"}),"\n",(0,s.jsx)(n.p,{children:"The database pod is running, but how does another pod connect to it?"}),"\n",(0,s.jsx)(n.p,{children:"Kubernetes pods are transient - they can be stopped, restarted, or created\ndynamically. Therefore we don't want to try to connect to pods directly, but\nrather create a Kubernetes Service. Services keep track of pods and direct\ntraffic to the right place."}),"\n",(0,s.jsx)(n.p,{children:"The final step for our database is to create the service descriptor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/postgres-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: postgres\n  namespace: backstage\nspec:\n  selector:\n    app: postgres\n  ports:\n    - port: 5432\n"})}),"\n",(0,s.jsx)(n.p,{children:"Apply the service to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/postgres-service.yaml\nservice/postgres created\n\n$ kubectl get services --namespace=backstage\nNAME       TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE\npostgres   ClusterIP   10.96.5.103   <none>        5432/TCP   29s\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-backstage-instance",children:"Creating the Backstage instance"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have PostgreSQL up and ready to store data, we can create the\nBackstage instance. This follows similar steps as the PostgreSQL deployment."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-backstage-secret",children:"Creating a Backstage secret"}),"\n",(0,s.jsxs)(n.p,{children:["For any Backstage configuration secrets, such as authorization tokens, we can\ncreate a similar Kubernetes Secret as we did\n",(0,s.jsx)(n.a,{href:"#creating-a-postgresql-secret",children:"for PostgreSQL"}),", remembering to base64 encode\nthe values:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/backstage-secrets.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: backstage-secrets\n  namespace: backstage\ntype: Opaque\ndata:\n  GITHUB_TOKEN: VG9rZW5Ub2tlblRva2VuVG9rZW5NYWxrb3ZpY2hUb2tlbg==\n"})}),"\n",(0,s.jsx)(n.p,{children:"Apply the secret to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/backstage-secrets.yaml\nsecret/backstage-secrets created\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-backstage-deployment",children:"Creating a Backstage deployment"}),"\n",(0,s.jsxs)(n.p,{children:["To create the Backstage deployment, first create a ",(0,s.jsx)(n.a,{href:"/docs/deployment/docker",children:"Docker image"}),".\nWe'll use this image to create a Kubernetes deployment. For this example, we'll\nuse the standard host build with the frontend bundled and served from the\nbackend."]}),"\n",(0,s.jsx)(n.p,{children:"First, create a Kubernetes Deployment descriptor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/backstage.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backstage\n  namespace: backstage\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: backstage\n  template:\n    metadata:\n      labels:\n        app: backstage\n    spec:\n      containers:\n        - name: backstage\n          image: backstage:1.0.0\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 7007\n          envFrom:\n            - secretRef:\n                name: postgres-secrets\n            - secretRef:\n                name: backstage-secrets\n# Uncomment if health checks are enabled in your app:\n# https://backstage.io/docs/plugins/observability#health-checks\n#          readinessProbe:\n#            httpGet:\n#              port: 7007\n#              path: /healthcheck\n#          livenessProbe:\n#            httpGet:\n#              port: 7007\n#              path: /healthcheck\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For production deployments, the ",(0,s.jsx)(n.code,{children:"image"})," reference will usually be a full URL to\na repository on a container registry (for example, ECR on AWS)."]}),"\n",(0,s.jsxs)(n.p,{children:["For testing locally with ",(0,s.jsx)(n.code,{children:"minikube"}),", you can point the local Docker daemon to\nthe ",(0,s.jsx)(n.code,{children:"minikube"})," internal Docker registry and then rebuild the image to install\nit:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ eval $(minikube docker-env)\n$ yarn build-image --tag backstage:1.0.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["There is no special wiring needed to access the PostgreSQL service. Since it's\nrunning on the same cluster, Kubernetes will inject ",(0,s.jsx)(n.code,{children:"POSTGRES_SERVICE_HOST"})," and\n",(0,s.jsx)(n.code,{children:"POSTGRES_SERVICE_PORT"})," environment variables into our Backstage container.\nThese can be used in the Backstage ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," along with the secrets:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    connection:\n      host: ${POSTGRES_SERVICE_HOST}\n      port: ${POSTGRES_SERVICE_PORT}\n      user: ${POSTGRES_USER}\n      password: ${POSTGRES_PASSWORD}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to rebuild the Docker image after applying ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," changes."]}),"\n",(0,s.jsx)(n.p,{children:"Apply this Deployment to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/backstage.yaml\ndeployment.apps/backstage created\n\n$ kubectl get deployments --namespace=backstage\nNAME        READY   UP-TO-DATE   AVAILABLE   AGE\nbackstage   1/1     1            1           1m\npostgres    1/1     1            1           10m\n\n$ kubectl get pods --namespace=backstage\nNAME                                 READY   STATUS    RESTARTS   AGE\nbackstage-54bfcd6476-n2jkm           1/1     Running   0          58s\npostgres-56c86b8bbc-66pt2            1/1     Running   0          9m\n"})}),"\n",(0,s.jsx)(n.p,{children:"Beautiful! \ud83c\udf89 The deployment and pod are running in the cluster. If you run into\nany trouble, check the container logs from the pod:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# -f to tail, <pod> -c <container>\n$ kubectl logs --namespace=backstage -f backstage-54bfcd6476-n2jkm -c backstage\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-backstage-service",children:"Creating a Backstage service"}),"\n",(0,s.jsxs)(n.p,{children:["Like the ",(0,s.jsx)(n.a,{href:"#creating-a-postgresql-service",children:"PostgreSQL service"})," above, we need to\ncreate a Kubernetes Service for Backstage to handle connecting requests to the\ncorrect pods."]}),"\n",(0,s.jsx)(n.p,{children:"Create the Kubernetes Service descriptor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# kubernetes/backstage-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: backstage\n  namespace: backstage\nspec:\n  selector:\n    app: backstage\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"selector"})," here is telling the Service which pods to target, and the port\nmapping translates normal HTTP port 80 to the backend http port (7007) on the\npod."]}),"\n",(0,s.jsx)(n.p,{children:"Apply this Service to the Kubernetes cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f kubernetes/backstage-service.yaml\nservice/backstage created\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we have a fully operational Backstage deployment! \ud83c\udf89 For a ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"grand\nreveal"})}),", you can forward a local port to the service:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo kubectl port-forward --namespace=backstage svc/backstage 80:80\nForwarding from 127.0.0.1:80 -> 7007\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This shows port 7007 since ",(0,s.jsx)(n.code,{children:"port-forward"})," doesn't ",(0,s.jsx)(n.em,{children:"really"})," support services, so\nit cheats by looking up the first pod for a service and connecting to the mapped\npod port."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"app.baseUrl"})," and ",(0,s.jsx)(n.code,{children:"backend.baseUrl"})," in your ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," should\nmatch what we're forwarding here (port omitted in this example since we're using\nthe default HTTP port 80):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  baseUrl: http://localhost\n\norganization:\n  name: Spotify\n\nbackend:\n  baseUrl: http://localhost\n  listen:\n    port: 7007\n  cors:\n    origin: http://localhost\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you're using an ",(0,s.jsx)(n.a,{href:"/docs/auth/",children:"auth provider"}),", it should also have this\naddress configured for the authentication pop-up to work properly."]}),"\n",(0,s.jsxs)(n.p,{children:["Now you can open a browser on your machine to ",(0,s.jsx)(n.a,{href:"http://localhost",children:"localhost"})," and\nbrowse your Kubernetes-deployed Backstage instance. \ud83d\udea2\ud83d\udea2\ud83d\udea2"]}),"\n",(0,s.jsx)(n.h2,{id:"further-steps",children:"Further steps"}),"\n",(0,s.jsx)(n.p,{children:"This is most of the way to a full production deployment of Backstage on\nKubernetes. There's a few additional steps to that will likely be needed beyond\nthe scope of this document."}),"\n",(0,s.jsx)(n.h3,{id:"set-up-a-more-reliable-volume",children:"Set up a more reliable volume"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PersistentVolume"})," configured above uses ",(0,s.jsx)(n.code,{children:"local"})," Kubernetes node storage.\nThis should be replaced with a cloud volume, network attached storage, or\nsomething more persistent beyond a Kubernetes node."]}),"\n",(0,s.jsx)(n.h3,{id:"expose-the-backstage-service",children:"Expose the Backstage service"}),"\n",(0,s.jsxs)(n.p,{children:["The Kubernetes Service is not exposed for external connections from outside the\ncluster. This is generally done with a Kubernetes\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",children:"ingress"})," or\nan\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/",children:"external load balancer"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"update-the-deployment-image",children:"Update the Deployment image"}),"\n",(0,s.jsxs)(n.p,{children:["To update the Kubernetes deployment to a newly published version of your\nBackstage Docker image, update the image tag reference in ",(0,s.jsx)(n.code,{children:"backstage.yaml"})," and\nthen apply the changes with ",(0,s.jsx)(n.code,{children:"kubectl apply -f kubernetes/backstage.yaml"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For production purposes, this image tag will generally be a full-fledged URL\npointing to a container registry where built Docker images are hosted. This can\nbe hosted internally in your infrastructure, or a managed one offered by a cloud\nprovider."})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var s=t(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var s,a={},i=null,d=null;for(s in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!l.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:r,type:e,key:i,ref:d,props:a,_owner:c.current}}n.Fragment=a,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var t=Symbol.for("react.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function f(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}function y(){}function k(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}f.prototype.isReactComponent={},f.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=f.prototype;var x=k.prototype=new y;x.constructor=k,m(x,f.prototype),x.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,s){var r,a={},o=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(o=""+n.key),n)v.call(n,r)&&!w.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(1===l)a.children=s;else if(1<l){for(var i=Array(l),d=0;d<l;d++)i[d]=arguments[d+2];a.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:t,type:e,key:o,ref:c,props:a,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var T=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,r,a,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case s:l=!0}}if(l)return o=o(l=e),e=""===a?"."+E(l,0):a,j(o)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),R(o,n,r,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+e)),n.push(o)),1;if(l=0,a=""===a?".":a+":",j(e))for(var i=0;i<e.length;i++){var d=a+E(c=e[i],i);l+=R(c,n,r,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),i=0;!(c=e.next()).done;)l+=R(c=c.value,n,r,d=a+E(c,i++),o);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function C(e,n,t){if(null==e)return e;var s=[],r=0;return R(e,s,"","",(function(e){return n.call(t,e,r++)})),s}function N(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},K={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:K,ReactCurrentOwner:S};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=f,n.Fragment=r,n.Profiler=o,n.PureComponent=k,n.StrictMode=a,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,n.cloneElement=function(e,n,s){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,o=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,c=S.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in n)v.call(n,i)&&!w.hasOwnProperty(i)&&(r[i]=void 0===n[i]&&void 0!==l?l[i]:n[i])}var i=arguments.length-2;if(1===i)r.children=s;else if(1<i){l=Array(i);for(var d=0;d<i;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:t,type:e.type,key:a,ref:o,props:r,_owner:c}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=K.transition;K.transition={};try{e()}finally{K.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return $.current.useCallback(e,n)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,n){return $.current.useEffect(e,n)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,n,t){return $.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return $.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return $.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return $.current.useMemo(e,n)},n.useReducer=function(e,n,t){return $.current.useReducer(e,n,t)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return $.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return $.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var s=t(667294);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:a(e),s.createElement(r.Provider,{value:c},n)}}}]);