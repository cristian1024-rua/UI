import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function SportsStore() {
  const products = [
    {
      id: 1,
      name: "Guayos",
      price: "$250.000",
      image: "https://prochampions.vtexassets.com/arquivos/ids/924941-800-800?v=638538198888370000&width=800&height=800&aspect=true",
      description: "Guayos profesionales, ideal para entrenamientos y partidos.",
    },
    {
      id: 2,
      name: "Camiseta de Colombia centenario",
      price: "$230.000",
      image: "https://www.futbolred.com/files/article_main/uploads/2024/10/11/67094df1a9655.jpeg",
      description: "Camiseta Seleccion Colombia color beis",
    },
    {
      id: 3,
      name: "Camiseta de Colombia visitante",
      price: "$200.000",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0069678ad5e74fc88df94001daa1f54d_9366/Camiseta_Visitante_Seleccion_Colombia_24_Kids_Negro_IP8272_01_laydown.jpg",
      description: "Camiseta Seleccion Colombia color negro con tomate",
    },
    {
      id: 4,
      name: "Camiseta de Colombia Local",
      price: "$180.000",
      image: "https://prochampions.vtexassets.com/arquivos/ids/871077-800-800?v=638489009382170000&width=800&height=800&aspect=true",
      description: "Camiseta Seleccion Colombia color Amarillo",
    },
  ];

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url('https://example.com/sports-background.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Tienda Deportiva</h1>
      <ul className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
        {products.map((product) => (
          <li key={product.id} className="w-full md:w-1/2 lg:w-1/3">
            <Card className="shadow-lg bg-white/90">
              <CardBody className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{ objectFit: "cover" }}
                  width="100%"
                  height={200}
                  className="rounded-t-lg"
                />
                <h2 className="text-xl font-bold mt-4 text-black">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold text-gray-800">{product.price}</p>
              </CardBody>
              <CardFooter className="flex justify-center">
                <Button color="primary" className="bg-blue-500 hover:bg-blue-600">
                  Añadir al Carrito
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}