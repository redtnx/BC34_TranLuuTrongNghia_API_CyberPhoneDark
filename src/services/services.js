function Services() {
  this.getListProduct = function () {
    /*
    Promise
    - Pending
    - Resolve
    - Reject
  */

    // Request
    return axios({
      url: "https://62ff793c9350a1e548df750f.mockapi.io/api/Products",
      method: "GET",
    });
  };
}
