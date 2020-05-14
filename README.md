# WalletGame

**Rules:**
- Input your name and how much money you have in your wallet $$$
- Several Animal Shops will be displayed.
- You can buy animals and see them displayed in your transaction list.
animal Shops can say Hi to other shops.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Web component

- The Host app is **<app-root>** the code is in **/src** folder.
- The web component is registered as **<product-element>** and code is in **/elements** folder.
- Parent Host needs to import the child web component in order to use it: done in index.html: **custom-element.js**

## to deploy child web component

Go to  **/elements** and run: 
```
npm run el-build
```

## Run project

Go to  **/** and run: 
```
ng serve
```

## How web component is used in parent host

```
<product-element>
```
web component is  wrapped in parent app with  
```
<app-wrap-web-component>
``` 
this wrap manange/ encapsulate easily inputs and events

## How MicroFrontends Communicate here:

### Input
- With parent: Object Input (primitive can be also used)
- With Sibilings: listening on Bus Event (attached to window object)

### Output
- With parent:  event Emmited on web component Itself
- With Sibilings: event emmited on bus 
