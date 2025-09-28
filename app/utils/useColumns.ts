interface Column {
  id: number;
  name: { value: string; isValid: boolean };
  type: { value: string };
  format: { value: string };
  unique: { value: boolean };
  required: { value: boolean };
  min: { value: string | number; isValid: boolean };
  max: { value: string | number; isValid: boolean };
  default: { value: string | number | boolean; isValid: boolean };
}

const database = reactive({
  name: {
    value: "New database",
    isValid: true,
  },
  languages: ["en"],
  columns: [] as Column[],
});

const columnIndex = ref(1)

function addColumn() {
  
  const newColumn = {
    id: columnIndex.value,
    name: { value: `column_${columnIndex.value}`, isValid: true },
    type: { value: "text" },
    format: { value: "" },
    unique: { value: true },
    required: { value: false },
    min: { value: 0, isValid: true },
    max: { value: 99999, isValid: true },
    default: { value: "", isValid: true },
  };
  columnIndex.value ++
  database.columns.push(newColumn);
}

function deleteColumn(id: number) {
  const index = database.columns.findIndex((col) => col.id === id)
  if (index !== -1 && database.columns.length !== 1) {
    database.columns.splice(index, 1)
  }
}

// Функция для получения колонки по ID
const getColumnById = (id: number) => {
  return database.columns.find((col) => col.id === id);
};

function resetDatabase() {
  columnIndex.value = 1
  database.columns = [];
  database.languages = ["en"];
  database.name.value = "New database";
}

export function useColumns() {
  return {
    database,
    addColumn,
    getColumnById,
    resetDatabase,
    deleteColumn
  };
}
