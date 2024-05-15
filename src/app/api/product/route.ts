import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Air Jordan 1 Low FlyEease",
    price: 2090000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aef7e1dd-fae4-40f2-86c2-d1072914505e/air-jordan-1-low-flyease-easy-on-off-shoes-SsT4HK.png",
  },
  {
    id: 2,
    title: "Air Jordan 1 Elevate Low",
    price: 2059000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2543f0c9-f113-4922-8c89-67c1d45201ab/air-jordan-1-elevate-low-shoes-XlkVrM.png",
  },
  {
    id: 3,
    title: "Air Jordan 1 Retro High OG",
    price: "28490000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
  },
  {
    id: 4,
    title: "Air Jordan 1 Retro High OG",
    price: "28490000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  //   Kalo ada id yang di cari
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: products,
  });
}
