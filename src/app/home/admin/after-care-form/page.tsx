"use client";
import AdminHeader from "@/components/AdminPanel/AdminHeader";
import AfterCareItem from "@/components/AdminPanel/AfterCareItem";
import ItemsGrid from "@/components/AdminPanel/ItemsGrid";
import { AfterCareFormModal } from "@/components/AdminPanel/Modal/AfterCareFormModal";
import React from "react";

function AfterCareForm() {
  return (
    <>
      <div className="flex flex-col w-full p-6 rounded-md bg-secondary">
        <AdminHeader
          title="Admin Panel"
          text="Aftercare Form"
          buttonText="Upload Form"
          Modal={AfterCareFormModal}
        />
        <ItemsGrid>
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
          <AfterCareItem />
        </ItemsGrid>
      </div>
    </>
  );
}

export default AfterCareForm;
