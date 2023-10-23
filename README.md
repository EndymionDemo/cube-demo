
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

![Endymion Browser](https://endymion.tech/endymion-address-qrcode-300x300.png)      



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

And Finally scan QR Code that appear in terminal with Endymion Browser App and visualize assets


To stop demo    

```bash
  npm run stop
```

## Usage/Examples
In Demo folder there are 3 files        
1 - index.html - host our code      
2 - index.arsd - tell Endymion Browser some view settings       
3 - endymion.js - endymion library code

Lets explore index.html
```html
<!DOCTYPE html>
<html>
  <head>
      <title>Home</title>
      <script src="endymion.js"></script>
</head>
  <body>
    <!-- 
        there is no tags in body, but it's a simple example, stay tuned for html part!
    -->
    <script>
        // ask to endymion library to generate a cube
        var cube = endymion.cube()
                              //set cube scale
                              .setScale({x:1, y:1, z:1})
                              // set rotation config using degree
                              .setRotation({x:45, y:45, z:0})
                              // set color config using object
                              .setColor({r:255, g:0, b:0, a:1})
                              //ask to endymion library to render cube configured
                              .render();

        // we also ask endymion library to generate a cube using
        // var cube = endymion.cube().render() istruction
        // default value are setted

        // same consideration for other entity like cylinder
        var cyl = endymion.cylinder()
                              .setScale({x:1, y:1, z:1})
                              .setRotation({x:45, y:45, z:0})

                              // setColor method accept variuos format for color
                              // like { r:number, g:number, b:number , a:number} object
                              // '#FFFFFF' exadecimal format
                              // 'rgba(255, 255, 30, 0.7)' string
                              // 'rgb(255, 30, 10)' string
                              // rgba function with r,g,b,a parameters
                              // rgb function with r,g,b parameter
                              // 'colorName' string all 143 html named color

                              //using color name
                              .setColor('lime')
                              .render();
        var xr = 45;

        //here we do a simple animation using 
        setInterval(() => {
          xr = xr + 10;
          endymion.with(cube)
                  .setRotX(xr)
                  //example of using rgba function
                  .setColor(rgba(0,0,255,0.3))
                  //apply method is used apply modifications
                  .apply();

          endymion.with(cyl)
                  .setRotY(xr)
                  //example of use rgb function
                  .setColor(rgb(0,255,255))
                  .apply();

        }, 500);
        
    </script>
  </body>
</html>
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

