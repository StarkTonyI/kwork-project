const Footer = () => {
  const columns = [
    {
      links: ["Информация", "Поддержка"],
    },
    {
      links: ["Пользователи", "Клиенты"],
    },
    {
      links: ["Реклама", "Настройки Куки"],
    },
    {
      links: ["Условия", "Главная"],
    },
    {
      links: ["Политика Конфиденциальности"],
    },
  ];

  return (
    <footer className="border-t border-border pt-8 pb-6">
      <div className="grid grid-cols-5 gap-8 mb-8">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="text-muted-foreground text-sm">@test</div>
    </footer>
  );
};

export default Footer;
