import prato1 from '../images/mock/prato1.png'
import prato2 from '../images/mock/prato2.png'
import prato3 from '../images/mock/prato3.png'
import axios from 'axios';
import { Menu } from '../model/menu.model';

export async function getMenus(): Promise<Menu[]> {
  const menus: Menu[] = [];
  console.log("Entrou no getmenus");
  await axios.get("https://chef-em-casa-backend.herokuapp.com/menu/")
    .then(response => {
      console.log("getMenus() response: ", response);
      response.data.map( menu => {
        menus.push(
          {
            id: menu.id,
            title: menu.title,
            description: menu.description,
            img: menu.img,
            details: {
              appetizer: menu.dishes.find((element, index, array)=>{element.type=='appetizer'}) || "",
              main: menu.dishes.find((element, index, array)=>{element.type=='main'}) || "",
              dessert: menu.dishes.find((element, index, array)=>{element.type=='dessert'}) || "",
            },
            price: menu.price
          }
        ) 
      }) 
    })
    .catch(response => console.log(response));
  return menus;
}

export async function getMenuDetail(id: string): Promise<Menu> {  
  var menu: Menu = {
    id: '',
    title: '',
    description: '',
    img: '',
    details: {
      appetizer: '',
      main: '',
      dessert: '',
    },
    price: '',
  };

  await axios.get(`https://chef-em-casa-backend.herokuapp.com/menu/${id}`)
  .then(response => {
    console.log("Get Menu Detail: ", response.data[0]);
    const menuBack = response.data[0];
    menu = {
      id: menuBack.id,
      title: menuBack.title,
      description: menuBack.description,
      img: "",
      details: {
        appetizer: menuBack.dishes.find((element, index, array)=>{return element.type=='appetizer'}).description,
        main: menuBack.dishes.find((element, index, array)=>{return element.type=='main'}).description,
        dessert: menuBack.dishes.find((element, index, array)=>{return element.type=='dessert'}).description,
      },
      price: menuBack.price  
    };
    })
    return menu;
}

export async function createMenu(menu: Menu) {
  await axios.post("https://chef-em-casa-backend.herokuapp.com/menu/", {
    title: menu.title,
    description: menu.description,
    img: "",
    dishes: [
      {
        description: menu.details.appetizer,
        type: "appetizer" 
      },
      {
        description: menu.details.main,
        type: "main"
      },
      {
        description: menu.details.dessert,
        type: "dessert"
      }
    ],
    price: menu.price
  })
    .then(response =>{console.log(response)});
}

const MenuMock: Menu[] = [
  {
    id: '0',
    title: 'Galinha assada',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    img: prato1,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
  {
    id: '1',
    title: 'Frango Xadrez',
    description: 'Frango preparado com pimentão, cebola, molho shoyu, gengibre e o toque especial do chefe.',
    img: prato2,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
  {
    id: '2',
    title: 'Nhoque',
    description: 'Nhoque ao molho sugo preparado com uma massa caseira e temperado com as mais diversas especiarias orientais.',
    img: prato3,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
]
