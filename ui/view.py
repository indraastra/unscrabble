import os.path
import sys

import json
import shutil
import tempfile
import webbrowser

"""
Creates a static web page for viewing a Scrabble board in JSON-format.

USAGE:
  $ cd unscrabble
  $ python ui/view.py [board.json]
"""

UI_DIR = os.path.abspath(os.path.dirname(sys.argv[0]))
JSON = json.loads(open(sys.argv[1]).read())

if __name__ == "__main__":
  # Make temporary directory.
  temp_dir = tempfile.mkdtemp()
  # Copy UI files to temp dir.
  shutil.copy(os.path.join(UI_DIR, "board.html"), temp_dir)
  shutil.copy(os.path.join(UI_DIR, "board.css"), temp_dir)
  shutil.copy(os.path.join(UI_DIR, "board.js"), temp_dir)
  # Serialize JSON to temp dir.
  boardJSON = "var boardJSON = '" + json.dumps(JSON) + "'"
  out_file = open(os.path.join(temp_dir, "json.js"), "w")
  out_file.write(boardJSON)
  out_file.close()
  # Launch viewer.
  webbrowser.open("file://" + os.path.join(temp_dir, "board.html"))
  # Wait for user input before cleaning up.
  raw_input("Press enter to delete temp files...")
  shutil.rmtree(temp_dir)
