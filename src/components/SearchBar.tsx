import { Eye, Settings, Filter } from "lucide-react";

const SearchBar = () => {
  return (
<div className="flex items-center gap-3">
  <div className="relative flex-1 max-w-sm">
    <input
      type="text"
      placeholder="Найти пользователя"
      className="w-full px-4 py-3 pr-12 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    />
    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
      <Eye className="w-5 h-5" />
    </button>
  </div>

  <button className="w-12 h-12 flex items-center justify-center bg-secondary border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
    <Settings className="w-5 h-5" />
  </button>

  <div className="h-12 w-px ml-3 mr-3 bg-border/40" />

  <button className="w-12 h-12 flex items-center justify-center bg-secondary border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
    <Filter className="w-5 h-5" />
  </button>
</div>

  );
};

export default SearchBar;
