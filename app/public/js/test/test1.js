var certView = new Vue({
  el: '#reportsPage',
  data: {
    members: [],
    expiredCerts: [],
    showResultsR1: false,
    showResultsR2: false
  },
  methods: {
    getExpireReport( evt ) {
      $(".expire-form").hide()
      fetch("api/reports/expired.php")
      .then( response => response.json() )
      .then( json => {
        this.expiredCerts = json;
        console.log(json)}
      );
    },
    getMemberReport( evt ) {
      $(".member-form").hide()
      fetch("api/reports/email.php")
      .then( response => response.json() )
      .then( json => {
        this.members = json;
        console.log(json)}
      );
    },
    // https://stackoverflow.com/questions/15547198/export-html-table-to-csv this is taken from answer 2 on the page
    download_table_as_csv(table_id) {
      // Select rows from table_id
      var rows = document.querySelectorAll('#' + table_id + ' tr')
      // Construct csv
      var csv = [];
      for (var i = 0; i < rows.length; i++) {
          var row = [], cols = rows[i].querySelectorAll('td, th');
          for (var j = 0; j < cols.length; j++) {
              // Clean innertext to remove multiple spaces and jumpline (break csv)
              var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
              // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
              data = data.replace(/"/g, '""');
              // Push escaped string
              row.push('"' + data + '"');
          }
          csv.push(row.join(';'));
      }
      var csv_string = csv.join('\n');
      // Download it
      var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
      var link = document.createElement('a');
      link.style.display = 'none';
      link.setAttribute('target', '_blank');
      link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
      link.setAttribute('download', filename);
