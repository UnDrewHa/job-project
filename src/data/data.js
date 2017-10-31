const data = {
  statusFilter: 'all',
  nameFilter: '',
  modal: {
    modalType: null,
    modalProps: {}
  },
  projects: [
    {
      id: '123',
      name: 'Команда создания',
      status: true,
      vacancies: [
        {
          id: '1-123',
          name: 'PHP-разработчик',
          status: true
        },
        {
          id: '1-234',
          name: 'Frontend-разработчик',
          status: false
        },
        {
          id: '1-345',
          name: 'Руководитель группы по информационной безопасности',
          status: true
        },
        {
          id: '1-456',
          name: 'Менеджер продукта',
          status: false
        },
        {
          id: '1-567',
          name: 'Fullstack-разработчик',
          status: true
        }
      ]
    },
    {
      id: '234',
      name: 'Отдел продаж',
      status: true,
      vacancies: [
        {
          id: '2-123',
          name: 'Менеджер по продажам интернет-рекламы (B2B)',
          status: true
        }
      ]
    },
    {
      id: '345',
      name: 'Отдел аналитики',
      status: true,
      vacancies: [
        {
          id: '3-123',
          name: 'Аналитик BI',
          status: true
        }
      ]
    },
    {
      id: '456',
      name: 'Отдел развития бизнеса',
      status: true,
      vacancies: [
        {
          id: '4-123',
          name: 'Digital маркетолог-аналитик',
          status: true
        }
      ]
    },
    {
      id: '567',
      name: 'Отдел маркетинга',
      status: false,
      vacancies: [
        {
          id: '5-123',
          name: 'Senior Copywriter',
          status: false
        }
      ]
    }
  ]
};

export default data;