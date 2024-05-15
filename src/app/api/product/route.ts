import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_0.8/h_486,c_limit/4693a962-0ea1-4677-b5fd-eeed550ab4d3/air-jordan-1-low-shoes-6Q1tFM.png",
  },
  {
    id: 2,
    title: "Sepatu Baru Dongg",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_0.8/h_486,c_limit/4693a962-0ea1-4677-b5fd-eeed550ab4d3/air-jordan-1-low-shoes-6Q1tFM.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  //   Kalo ada id yang di cari
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
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

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
