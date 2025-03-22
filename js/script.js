function showBookingModal() {
  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}

$("#bookingForm").submit(function (e) {
  e.preventDefault();
  const formData = {
    name: $('input[type="text"]').val(),
    phone: $('input[type="tel"]').val(),
    service: $("select").val(),
    notes: $("textarea").val(),
  };

  // Here you would typically send the data to your backend
  // Example using Google Sheets:
  /* 
    fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(() => {
        alert('تم الحجز بنجاح');
        $('#bookingModal').modal('hide');
    });
    */

  console.log(formData); // For demonstration
  alert("تم استلام طلبك، سنتصل بك قريباً");
  $("#bookingModal").modal("hide");
});
