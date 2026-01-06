import { useState } from "react";
import { Plus } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import UsersTable from "@/components/UsersTable";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        {/* Breadcrumb */}
        <nav className="text-muted-foreground text-sm mb-2">
          <span>Данные</span>
          <span className="mx-2">/</span>
          <span>Пользователи</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-8">Пользователи</h1>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <SearchBar />
          
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-5 h-5" />
            Добавить пользователя
          </button>
        </div>

        {/* Table */}
        <UsersTable />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={30000}
          totalItems={30000}
          itemsPerPage={20}
          onPageChange={setCurrentPage}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
