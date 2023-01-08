$("#date-ida").daterangepicker({
  singleDatePicker: true,
  autoUpdateInput: false,
  "minDate": new Date(Date.now()).toLocaleDateString(),
  locale: {
    cancelLabel: "Clear",
  },
});

$("#date-ida").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("DD/MM/YYYY")
    //   " - " +
    //   picker.endDate.format("DD/MM/YYYY")
  );
});

$("#date-ida").on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
