document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Mapping search queries to URLs
    var pages = {
      'home': 'index.html',
      'homepage': 'index.html',
      'main page': 'index.html',
      'welcome': 'index.html',
      'start': 'index.html',
      'beginning': 'index.html',
      'about': 'about.html',
      'about us': 'about.html',
      'company info': 'about.html',
      'information': 'about.html',
      'who we are': 'about.html',
      'our story': 'about.html',
      'background': 'about.html',
      'team': 'team.html',
      'our team': 'team.html',
      'staff': 'team.html',
      'employees': 'team.html',
      'crew': 'team.html',
      'members': 'team.html',
      'mission': 'mission.html',
      'our mission': 'mission.html',
      'goals': 'mission.html',
      'objectives': 'mission.html',
      'purpose': 'mission.html',
      'vision': 'mission.html',
      'values': 'mission.html',
      'aims': 'mission.html',
      'services': 'services.html',
      'service': 'services.html',
      'what we do': 'services.html',
      'offerings': 'services.html',
      'products': 'services.html',
      'solutions': 'services.html',
      'help': 'services.html',
      'computer repair': 'computer-repair.html',
      'pc repair': 'computer-repair.html',
      'laptop repair': 'computer-repair.html',
      'repair computer': 'computer-repair.html',
      'fix computer': 'computer-repair.html',
      'computer fixing': 'computer-repair.html',
      'computer services': 'computer-repair.html',
      'pc fixing': 'computer-repair.html',
      'laptop fixing': 'computer-repair.html',
      'data recovery': 'data-recovery.html',
      'recover data': 'data-recovery.html',
      'data restore': 'data-recovery.html',
      'file recovery': 'data-recovery.html',
      'data retrieval': 'data-recovery.html',
      'restore data': 'data-recovery.html',
      'retrieve data': 'data-recovery.html',
      'file restore': 'data-recovery.html',
      'data backup': 'data-recovery.html',
      'recover files': 'data-recovery.html',
      'contact': 'contact.html',
      'contact us': 'contact.html',
      'get in touch': 'contact.html',
      'reach us': 'contact.html',
      'call us': 'contact.html',
      'email us': 'contact.html',
      'contact information': 'contact.html',
      'feedback': 'feedback.html',
      'review': 'feedback.html',
      'reviews': 'feedback.html',
      'comments': 'feedback.html',
      'suggestions': 'feedback.html',
      'testimonial': 'feedback.html',
      'testimonials': 'feedback.html',
      'rating': 'feedback.html',
      'ratings': 'feedback.html',
      'opinion': 'feedback.html',
      'opinions': 'feedback.html',
      'customer feedback': 'feedback.html',
      'customer review': 'feedback.html',
      'customer reviews': 'feedback.html'
    };
  
    function findClosestMatch(query, pages) {
      var keys = Object.keys(pages);
      var closestMatch = '';
      var closestDistance = Infinity;
  
      keys.forEach(function(key) {
        var distance = levenshteinDistance(query, key);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestMatch = key;
        }
      });
  
      return closestMatch;
    }
  
    function levenshteinDistance(a, b) {
      var matrix = [];
  
      for (var i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }
  
      for (var j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }
  
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
              Math.min(matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j] + 1)); // deletion
          }
        }
      }
  
      return matrix[b.length][a.length];
    }
  
    var matchedPage = pages[query];
    
    if (!matchedPage) {
      var closestMatch = findClosestMatch(query, pages);
      var closestDistance = levenshteinDistance(query, closestMatch);
  
      // Allow a maximum distance threshold for fuzzy matching
      var maxDistance = 3;
      if (closestDistance <= maxDistance) {
        matchedPage = pages[closestMatch];
      }
    }
  
    if (matchedPage) {
      window.location.href = matchedPage;
    } else {
      alert('Page not found');
    }
  });
  
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('searchButton').click();
    }
  });
  