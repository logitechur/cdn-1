function totalComments(json) {
  document.getElementById('total-comments').innerHTML = json.feed.openSearch$totalResults.$t
};
document.write('<script type=\"text/javascript\" src=\"/feeds/comments/default?alt=json-in-script&max-results=0&callback=totalComments\"><\/script>');
