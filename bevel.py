#!/usr/bin/env python

import webkit, gtk, os
import subprocess

win = gtk.Window(gtk.WINDOW_TOPLEVEL)
win.set_opacity(0.97)
win.set_keep_above(True)
win.set_decorated(False)
win.set_skip_taskbar_hint(True)

screen = win.get_screen()
width = screen.get_width()
height = screen.get_height()
right = width + 265
top = 0
bottom = height - 24

win.move(right,top)
win.set_size_request(265,bottom)
win.connect('show', lambda w: win.set_size_request(265,bottom))
win.connect('destroy', lambda w: gtk.main_quit())
scroller = gtk.ScrolledWindow()
win.add(scroller)

class WibKit(object):
	web = webkit.WebView()
	path=os.getcwd()
	print path
	websettings = web.get_settings()
	websettings.set_property("javascript-can-open-windows-automatically", True)
	websettings.set_property("enable-universal-access-from-file-uris", True)
	web.load_uri("file://" + path + "/system/bevel.html")
	scroller.add(web)
	
	def navigation_requested_cb(view, frame, networkRequest):
		uri = networkRequest.get_uri()
		subprocess.Popen(['xdg-open', uri])
		return 1
		web.connect('navigation-requested', navigation_requested_cb)

#win.add(web)
win.show_all()
gtk.main()
