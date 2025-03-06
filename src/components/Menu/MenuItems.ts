export interface MenuItem {
    name: string;
    description: string;
    price?: number;
  }
  
export interface FilteredCoffeeItem extends MenuItem {
    size: string;
    image: string;
    prices: {
      small?: number;
      large?: number;
    }
  }
  
export const coffeeItems: MenuItem[] = [
    { name: 'Espresso', description: '30ml', price: 6 },
    { name: 'Espresso Duplo', description: 'Dose dupla de espresso, 60ml', price: 9 },
    { name: 'Espresso Longo', description: 'Espresso + água, 60ml', price: 8 },
    { name: 'Macchiato', description: 'Espresso duplo com crema do leite, 60ml', price: 10 },
    { name: 'Cappuccino', description: 'Espresso com leite cremoso e canela, 200ml', price: 15 },
    { name: 'Latte', description: 'Espresso simples com leite, 200ml', price: 15 },
    { name: 'Flat White', description: 'Espresso duplo com leite, 200ml', price: 16 },
    { name: 'Guido Latte', description: 'Espresso duplo com leite e caramelo, 200ml', price: 16 },
    { name: 'Mochaccino', description: 'Espresso duplo com leite e chocolate, 270ml', price: 16 },
    { name: 'Cappuccino Brûlé', description: 'Espresso duplo com leite e baunilha, finalizado com açúcar tostado, 270ml', price: 18 },
    { name: 'Latte Ice', description: 'Natural, Baunilha ou Caramelo, 400ml', price: 18 }
  ];
  
export const filtradosItems: FilteredCoffeeItem[] = [
    { name: 'V60', size: '200ml | 400ml', image: '/assets/images/v60.png', description: 'Suave, Ácido, Doce', prices: { small: 14, large: 19 } },
    { name: 'Kalita', size: '200ml | 400ml', image: '/assets/images/kalita.png', description: 'Encorpado, Ácido, Doce', prices: { small: 15, large: 20 } },
    { name: 'Prensa Francesa', size: '300ml', image: '/assets/images/francesa.png', description: 'Intenso, Marcante, Aromático', prices: { small: 18 } },
    { name: 'AeroPress', size: '280ml', image: '/assets/images/aeropress.png', description: 'Intenso, Encorpado', prices: { small: 18 } },
    { name: 'Chemex', size: '450ml', image: '/assets/images/chemex.png', description: 'Frutado, Equilibrado, Duplo Filtrado', prices: { small: 24 } }
  ];
  
  
export const padocaItems: MenuItem[] = [
    { name: 'Pão de Queijo', description: 'Feito com queijo meia-cura e parmesão', price: 8 },
    { name: 'Pão de Batata c/ requeijão', description: 'Fofo e muito recheado', price: 14 },
    { name: 'Folhado de Frango c/ Requeijão', description: 'Nosso queridinho', price: 14 },
    { name: 'Croissant c/ Presunto e Queijo', description: 'O clásico francês na versão brasileira', price: 15 },
    { name: 'Torrada', description: 'Pão de fermentação natural tostado com manteiga, queijo e presunto', price: 23 },
    { name: 'Ovos Mexidos', description: 'Acompanha pão de fermentação natural', price: 25 },
    { name: 'Cookie', description: 'Pergunte ao barista o que temos hoje!', price: 12 },
    { name: 'Pastel de Nata', description: 'O clássico português servido quente', price: 12 },
    { name: 'Muffin', description: 'Pergunte ao barista o que temos hoje!', price: 14 },
    { name: 'Brownie', description: 'Com ganache de chocolate e caramelo salgado', price: 15 },
    { name: 'Tortas', description: 'Pergunte ao barista o que temos hoje!', price: 22 },
    { name: 'Torta Vegana', description: 'Base de amendoim e recheio de Navelã, servida gelada', price: 25 },
  ];