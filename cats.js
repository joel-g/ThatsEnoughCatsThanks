// https://www.reddit.com/r/help/comments/44498b/how_to_hide_or_filter_a_subreddit_from_rall/#res:settings/filteReddit


const subreddits = [
  'cats',
  'aww',
  'jellybeantoes',
  'catsinsinks',
  'meow_irl',
  'startledcats',
  'catsonglass',
  'catvideos',
  'catpictures',
  'kittens',
  'catloaf',
  'catsstandingup',
  'blep',
  'tuckedinkitties',
  'stuffoncats',
  'catgifs',
  'floof',
  'catpranks',
  'catsinbusinessattire',
  'lolcats',
  'catreactiongifs',
  'catbellies',
  'midlystartledcats',
  'cathighfive',
  'catreddit',
  'catcircles',
  'catsvstechnology',
]


for (let i = 0; i < subreddits.length; i++) {
  $('.addRowButton:eq(1)').trigger('click');
  $("#subreddits_filteRedditSubredditsSubreddits_" + (i+1)).val(subreddits[i])
}



