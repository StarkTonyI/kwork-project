import { useState } from "react";
import { ChevronUp, ChevronDown, MoreVertical, Check } from "lucide-react";

interface User {
  id: number;
  role: string;
  name: string;
  login: string;
  position: string;
  contacts: string;
  email: string;
  phone: string;
  city: string;
}

const mockUsers: User[] = [
  {
    id: 13619,
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "@test",
    email: "test@test.ru",
    phone: "+7 99999999999",
    city: "Нижний Новгород",
  },
  {
    id: 13619,
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "",
    email: "test@test.ru",
    phone: "+7 99999999999",
    city: "Нижний Новгород",
  },
];

const positions = ["Дизайнер", "Front End разработчик", "Back End разработчик"];

interface PositionDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const PositionDropdown = ({ value, onChange }: PositionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-secondary hover:bg-muted transition-colors min-w-[140px] justify-between"
      >
        <span className="text-foreground text-sm">{value}</span>
        <ChevronUp className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? '' : 'rotate-180'}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-xl z-50">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => {
                onChange(position);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {value === position && <Check className="w-4 h-4 text-foreground" />}
              {value !== position && <span className="w-4" />}
              <span>{position}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SortableHeaderProps {
  label: string;
  sortable?: boolean;
}

const SortableHeader = ({ label, sortable = true }: SortableHeaderProps) => (
  <th className="text-left py-4 px-4 text-muted-foreground text-sm font-normal">
    <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
      {sortable && <ChevronDown className="w-3 h-3" />}
      {label}
    </div>
  </th>
);

const UsersTable = () => {
  const [users, setUsers] = useState(mockUsers);

  const handlePositionChange = (index: number, newPosition: string) => {
    const newUsers = [...users];
    newUsers[index] = { ...newUsers[index], position: newPosition };
    setUsers(newUsers);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 text-primary text-sm font-normal">
              <div className="flex items-center gap-1">
                <ChevronUp className="w-3 h-3" />
                ID
              </div>
            </th>
            <SortableHeader label="Роль ⓘ" />
            <SortableHeader label="Имя" />
            <SortableHeader label="Логин" />
            <SortableHeader label="Должность" />
            <SortableHeader label="Контакты" />
            <SortableHeader label="Почта" />
            <SortableHeader label="Телефон" />
            <SortableHeader label="Город" />
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr 
              key={index} 
              className="border-b border-border hover:bg-table-row-hover transition-colors"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-foreground">{user.id}</span>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
              <td className="py-4 px-4 text-foreground">{user.role}</td>
              <td className="py-4 px-4 text-foreground">{user.name}</td>
              <td className="py-4 px-4 text-foreground">{user.login}</td>
              <td className="py-4 px-4">
                <PositionDropdown
                  value={user.position}
                  onChange={(value) => handlePositionChange(index, value)}
                />
              </td>
              <td className="py-4 px-4 text-foreground">{user.contacts}</td>
              <td className="py-4 px-4 text-foreground">{user.email}</td>
              <td className="py-4 px-4 text-foreground">{user.phone}</td>
              <td className="py-4 px-4 text-foreground">{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
