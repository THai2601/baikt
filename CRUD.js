const categories = [];

function createCategory(name, description) {
    const newCategory = {
        id: categories.length + 1,
        name,
        description,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    categories.push(newCategory);
    return newCategory;
}

function getCategories(showDeleted = false) {
    return showDeleted ? categories : categories.filter(cat => !cat.isDeleted);
}

function updateCategory(id, newData) {
    const category = categories.find(cat => cat.id === id);
    if (!category) return null;

    category.name = newData.name || category.name;
    category.description = newData.description || category.description;
    category.updatedAt = new Date();
    return category;
}

function deleteCategory(id) {
    const category = categories.find(cat => cat.id === id);
    if (!category) return null;

    category.isDeleted = true;
    category.updatedAt = new Date();
    return category;
}

function restoreCategory(id) {
    const category = categories.find(cat => cat.id === id && category.isDeleted);
    if (!category) return null;

    category.isDeleted = false;
    category.updatedAt = new Date();
    return category;
}

function hardDeleteCategory(id) {
    const index = categories.findIndex(cat => cat.id === id);
    if (index === -1) return null;

    return categories.splice(index, 1)[0];
}

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    restoreCategory,
    hardDeleteCategory,
};
