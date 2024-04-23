
# Cube Demo

AR cube (and other object) positionig, painting and animate example using Endymion AR library



## Features

- Render 3D assets with a simple javascript code
- Just add endymion.js library
- and create AR object 


## Getting Started

For run demo you have to perform this step:   

1 - Download with your device (Android) the Endymion Browser apk scanning this qr code and clicking on "Download Beta"        
    (registration is required)   

![Endymion Browser](https://endymion.tech/qr-code-address/endymion.tech_300x300.png)    



2 - Install Docker on your computer, download available here: [Docker Download](https://docs.docker.com/desktop/)

3 - open your computer firewall for 8080 tcp port   
for linux
```bash
    sudo ufw allow 8080
```
for windows using powershell with admin privilege
```powershell
netsh advfirewall firewall add rule name="cube-demo" dir=in action=allow protocol=TCP localport=8080
```
    
## Run Locally

Clone the project, go to the project directory, install dependencies and run demo

```bash
git clone https://github.com/EndymionDemo/cube-demo.git   
cd cube-demo    
npm install   
npm run start   

```
Ensure that your smartphone and your computer are connected to same wifi/LAN        
And Finally scan QR Code that appear in terminal with Endymion Browser App and visualize assets


To stop demo    

```bash
  npm run stop
```

## Usage/Examples
In Demo folder there are 3 files        
1 - index.html - host our code      
2 - index.arsd - tell Endymion Browser some view settings       
3 - endymion.2.3.0.js - endymion library code

Lets explore index.html
```html
<!DOCTYPE html>
<html>

<head>
  <title>Home</title>
  <script src="endymion.2.3.0.js"></script>
</head>

<body>
  <script>
    // get primitives instance from endymion library
    let cube = en.cube();
    let cyl = en.cylinder();


    let cylColor = 'red';
    var step = 5
    var startRotation = 45;

    //subscribe clicked observable of cylinder
    //to change color on click
    cyl.clicked$.subscribe(() => {
      cylColor = cylColor === 'red' ? 'blue' : 'red';
      cyl.setColor(cylColor).apply();
    });

    //subscribe clicked observable of cube
    //for change rotation on click
    cube.clicked$.subscribe(() => {
      step = step > 0 ? -5 : 5;
    });

    //subscribe create observable of cube to 
    //start rotation 
    cube.created$.subscribe(() => {
      setInterval(() => {
        cube.addRot(step, 0, 0).apply();
      }, 1000);
    });

    //set entity clickable
    cyl.setClickable(true)
      //add 45 degrees rotation to default value = 0
      .addRot(0, 45, 0)
      //ask endymion browser to create a cylinder
      .create();

    //set entity clickable
    cube.setClickable(true)
      //set absolute position to x=1, y=1, z=1
      //where measure unity is marker side lenght
      .setPos(1, 1, 1)
      //set x and y rotation to 45 degrees
      .setRot(45, 45, 0)
      //set lime for entity color
      .setColor('lime')
      //ask endymion browser to create a cube
      .create();
  </script>
</body>

</html>
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

