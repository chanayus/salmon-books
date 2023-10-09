const itemList = document.getElementById("item-list");
const pagination = document.getElementById("pagination");

const itemsPerPage = Number(pagination.dataset.perPage);
const totalPages = Math.ceil(pagination.dataset.totalData / itemsPerPage);

const pageParams = Number(new URLSearchParams(window.location.search).get("page")) || 1;

let currentPage = pageParams > totalPages ? 1 : pageParams;

const updatePagination = () => {
  pagination.innerHTML = "";

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const firstPageArrow = document.createElement("button");
  firstPageArrow.innerHTML = `<img src="./icons/double-arrow-left-gray.svg" alt="<<" />`;
  currentPage > 1 &&
    firstPageArrow.addEventListener("click", () => {
      currentPage = 1;

      updatePagination();
    });
  pagination.appendChild(firstPageArrow);

  const prevArrow = document.createElement("button");
  prevArrow.innerHTML = `<img src="./icons/arrow-left-gray.svg" alt="<" />`;
  prevPage >= 1 &&
    prevArrow.addEventListener("click", () => {
      currentPage = prevPage;

      updatePagination();
    });
  pagination.appendChild(prevArrow);

  for (let i = startPage; i <= endPage; i++) {
    const listItem = document.createElement("button");
    listItem.textContent = i;
    listItem.addEventListener("click", () => {
      currentPage = i;

      updatePagination();
    });

    if (i === currentPage) {
      listItem.classList.add("active");
    }

    pagination.appendChild(listItem);
  }

  const nextArrow = document.createElement("button");
  nextArrow.innerHTML = `<img src="./icons/arrow-right-gray.svg" alt=">" />`;
  nextPage <= totalPages &&
    nextArrow.addEventListener("click", () => {
      currentPage = nextPage;

      updatePagination();
    });
  pagination.appendChild(nextArrow);

  const lastPageArrow = document.createElement("button");
  lastPageArrow.innerHTML = `<img src="./icons/double-arrow-right-gray.svg" alt=">>" />`;
  currentPage < totalPages &&
    lastPageArrow.addEventListener("click", () => {
      currentPage = totalPages;

      updatePagination();
    });
  pagination.appendChild(lastPageArrow);
};

updatePagination();
