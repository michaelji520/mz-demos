/**
 * Copyright (c) 2014-2018 NighthawkStudio, All rights reserved.
 * @fileoverview
 * @author Michael Zhang | michaelji520@gmail.com
 * @version 1.0 | 2019-11-11 | initial version
 */

var execCmd = function (cmd, args = null) {
  console.log(cmd);
  document.execCommand(cmd, false, args);
}

var toggleDropdownPanel = function (e) {
  console.log(e);
  e.parentElement.querySelector('.dropdown-panel').classList.toggle('show');
}