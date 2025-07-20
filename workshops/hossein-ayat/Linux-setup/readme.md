# Linux Setup For a Frontend Project

### SSH setup with SHA KEY

- cd .ssh
- copy pem / private key and to .ssh
- nano config
- edit config 

```
Host my-server
    HostName ip-address
    User your-username
    IdentityFile ~/.ssh/my-project.pem
    IdentitiesOnly yes
```

- SSH my-server

### After SSH connection

- sudo apt update
- sudo apt -upgrade -y
