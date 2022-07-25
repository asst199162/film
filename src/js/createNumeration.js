// import { paginationHome } from './references';
// const element = document.querySelector('.pagination ul');
// let totalPages = 25;
// let page = 5;

//виклик функції з передачею параметрів і додаванням внутрішнього елемента, який є тегом ul
// element.innerHTML = createNumeration(totalPages, page);
// export function createNumeration(totalPages, page) {
//   let liTag = '';
//   let active;
//   let beforePage = page - 1;
//   let afterPage = page + 1;
//   if (page > 1) {
//     //показує наступну кнопку, якщо значення сторінки більше 1
//     liTag += `<li class="btn prev" onclick="createNumeration(totalPages, ${
//       page - 1
//     })"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
//     <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
//   </svg></li>`;
//   }

//   if (page > 2) {
//     //якщо значення сторінки менше 2, додає 1 після попередньої кнопки
//     liTag += `<li class="first numb" onclick="createNumeration(totalPages, 1)"><span>1</span></li>`;
//     if (page > 3) {
//       //якщо значення сторінки більше 3, додає (...) після першої li або сторінки
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }

//   // скільки сторінок або li відображається перед поточної li
//   if (page == totalPages) {
//     beforePage = beforePage - 2;
//   } else if (page == totalPages - 1) {
//     beforePage = beforePage - 1;
//   }
//   // скільки сторінок або li відображається після поточної li
//   if (page == 1) {
//     afterPage = afterPage + 2;
//   } else if (page == 2) {
//     afterPage = afterPage + 1;
//   }

//   for (var length = beforePage; length <= afterPage; length++) {
//     if (length > totalPages) {
//       //якщо довжина більша за загальну довжину сторінки, продовжує
//       continue;
//     }
//     if (length == 0) {
//       //якщо довжина дорівнює 0, додає +1 до значення довжини
//       length = length + 1;
//     }
//     if (page == length) {
//       //якщо сторінка дорівнює довжині, тоді призначає активний рядок в активній змінній
//       active = 'active';
//     } else {
//       //інакше залишає порожнім активну змінну
//       active = '';
//     }
//     liTag += `<li class="numb ${active}" onclick="createNumeration(totalPages, ${length})"><span>${length}</span></li>`;
//   }

//   if (page < totalPages - 1) {
//     //якщо значення сторінки менше значення totalPage на -1, тоді відображає останню li або сторінку
//     if (page < totalPages - 2) {
//       //якщо значення сторінки менше значення totalPage на -2, додає (...) перед останньою li або сторінкою
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="last numb" onclick="createNumeration(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }

//   if (page < totalPages) {
//     //показує наступну кнопку, якщо значення сторінки менше totalPage(20)
//     liTag += `<li class="btn next" onclick="createNumeration(totalPages, ${
//       page + 1
//     })"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
//     <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
//   </svg></li>`;
//   }
//   // paginationHome.innerHTML = liTag; //додає тег li в тег ul
//   return liTag; //повертає тег li
// }

// My realization
export function createNumeration(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    //показує наступну кнопку, якщо значення сторінки більше 1
    liTag += `<li class="btn prev" data-totalPages="${totalPages}" data-page="${
      page - 1
    }"      
    ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
  </svg></li>`;
  }

  if (page > 2) {
    //якщо значення сторінки менше 2, додає 1 після попередньої кнопки
    liTag += `<li class="first numb" data-totalPages="${totalPages}" data-page="1")"><span>1</span></li>`;
    if (page > 3) {
      //якщо значення сторінки більше 3, додає (...) після першої li або сторінки
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // скільки сторінок або li відображається перед поточної li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // скільки сторінок або li відображається після поточної li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var length = beforePage; length <= afterPage; length++) {
    if (length > totalPages) {
      //якщо довжина більша за загальну довжину сторінки, продовжує
      continue;
    }
    if (length == 0) {
      //якщо довжина дорівнює 0, додає +1 до значення довжини
      length = length + 1;
    }
    if (page == length) {
      //якщо сторінка дорівнює довжині, тоді призначає активний рядок в активній змінній
      active = 'active';
    } else {
      //інакше залишає порожнім активну змінну
      active = '';
    }
    liTag += `<li class="numb ${active}" data-totalPages="${totalPages}" data-page="${length}"><span>${length}</span></li>`;
  }

  if (page < totalPages - 1) {
    //якщо значення сторінки менше значення totalPage на -1, тоді відображає останню li або сторінку
    if (page < totalPages - 2) {
      //якщо значення сторінки менше значення totalPage на -2, додає (...) перед останньою li або сторінкою
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" data-totalPages="${totalPages}" data-page="${totalPages}"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    //показує наступну кнопку, якщо значення сторінки менше totalPage(20)
    liTag += `<li class="btn next" data-totalPages="${totalPages}" data-page="${
      page + 1
    }">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg></li>`;
  }
  // paginationHome.innerHTML = liTag; //додає тег li в тег ul
  return liTag; //повертає тег li
}
