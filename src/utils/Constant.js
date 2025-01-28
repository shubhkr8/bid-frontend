export const BID_CLASS_OPTION = ["Public", "Private"];

export const FRIEGHT_OPTION = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

export const SUBMITTED_BY = ["bijay", "priyanka", "jyoti", 'hina'];

export const BID_TYPE_OPTION = ["public", "private", "Dummy Bid"];

export const serviceID = 'service_qvbq8wp';
export const templateId = 'template_8vg6lgj';
export const publicId = 'lzLvVm1tdVA_gJo4g';

export const VENDOR_ID_OPTION = [
  "LZ",
  "HT",
  "AZ",
  "GY",
  "PT",
  "BMC",
  "UNO",
  "HINA",
  "SGT",
  "RSC",
  "OW",
  "OG",
  "JEW",
];

export const MATERIAL_SERIES_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const TAG = ["RMS", "OES", "Manufacturer", "OEM", "Wholesaler", "Auth Distributor", "Retailer", "Trader"];

export const SOURCE = ["LN", "IM", "TI", "JD"];

export const COLUMNDEFS = [
  {
    headerName: "S.No",
    field: "serial_no",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    sort: "desc",
    width: 85,
  },
  {
    headerName: "Timestamp",
    field: "timestamp",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 160,
  },
  {
    headerName: "RFQ Number",
    field: "rfq_no",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 300,
  },
  {
    headerName: "Start Date",
    field: "rfq_start_date",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "End Date",
    field: "rfq_end_date",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "Buyer",
    field: "buyer",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 150,
  },
  {
    headerName: "Buyer Number",
    field: "buyer_no",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 113,
  },
  {
    headerName: "Scope",
    field: "scope",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
  },

  {
    headerName: "Material Line Items",
    field: "material_line_items",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 80,
  },
  {
    headerName: "Bid Type",
    field: "bid_type",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "User Name",
    field: "usr_name",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
];

export const SUPPLIER_COLUMNDEFS = [
  {
    headerName: "S.No",
    field: "serial_no",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    sort: "desc",
    width: 85,
  },
  {
    headerName: "Timestamp",
    field: "timestamp",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 140,
  },
  {
    headerName: "Supplier Name",
    field: "supplier_name",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 250,
  },
  {
    headerName: "Phone Number",
    field: "phone_no",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "Address",
    field: "address",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 180,
  },
  {
    headerName: "Materail-1",
    field: "materail_1",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 150,
  },
  {
    headerName: "Service Name",
    field: "materail_2",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 113,
  },
  {
    headerName: "Contact Person",
    field: "materail_3",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
  },

  {
    headerName: "Email",
    field: "email",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 150,
  },
  {
    headerName: "Tag",
    field: "tag",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "Source",
    field: "source",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "GST",
    field: "gst",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "Attachment",
    field: "attachment_link",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  },
  {
    headerName: "Submitted By",
    field: "submitted_by",
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 0,
      buttons: ["reset"],
    },
    width: 100,
  }
];
