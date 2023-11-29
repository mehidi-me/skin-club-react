"use client";
import AdminHeader from "@/components/AdminPanel/AdminHeader";
import ItemsGrid from "@/components/AdminPanel/ItemsGrid";
import { ProductFormModal } from "@/components/AdminPanel/Modal/ProductFormModal";
import ProductItem from "@/components/AdminPanel/ProductItem";
import React from "react";

function AdminProducts() {
  return (
    <div className="flex flex-col w-full  p-6 rounded-md bg-secondary">
      <AdminHeader
        title="Admin Panel"
        text="Products"
        buttonText="Add new product"
        Modal={ProductFormModal}
      />
      <div className="grid grid-cols-1 gap-6 mt-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default AdminProducts;
