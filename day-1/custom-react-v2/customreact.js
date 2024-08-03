function customRender(elemToRender, whereToRender){
    const domElement = document.createElement(elemToRender.type);
    domElement.innerHTML = elemToRender.children;

    for (const prop in elemToRender.props) {
        if(prop.key === 'children') continue;

        domElement.setAttribute(prop, elemToRender.props[prop])


    }

    whereToRender.appendChild(domElement);
}



const reactElement = {

    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const containerElement = document.getElementById('root');

customRender(reactElement,containerElement);