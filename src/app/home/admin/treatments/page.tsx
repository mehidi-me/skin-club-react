"use client";
import AdminHeader from "@/components/AdminPanel/AdminHeader";
import ItemsGrid from "@/components/AdminPanel/ItemsGrid";
import { TreatmentFormModal } from "@/components/AdminPanel/Modal/TreatmentFormModal";
import TreatmentItem from "@/components/AdminPanel/TreatmentItem";
import React from "react";

function Treatment() {
  return (
    <div className="flex flex-col w-full  p-6 rounded-md bg-secondary">
      <AdminHeader
        title="Admin Panel"
        text="Treatments"
        buttonText="Create a new section"
        Modal={TreatmentFormModal}
      />
      <ItemsGrid>
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
        <TreatmentItem />
      </ItemsGrid>
    </div>
  );
}

export default Treatment;
