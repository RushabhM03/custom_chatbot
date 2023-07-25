from tkinter import *
import sys
sys.path.append('D:/WebDev/Chat bot/bot')
from chat import get_response, bot_name

BG_GRAY = "#ABB2B9"
BG_COLOR = "#17202A"
TEXT_COLOR = "#EAECEE"

FONT = "Helvetica 14"
FONT_BOLD = "Helvetica 13 bold"

class ChatApplication:

    def __init__(self):
        self.window = Tk()
        self._setup_main_window()
    
    def _setup_main_window(self):
        self.window.title = "Chat"
        self.window.resizable(width="False", height=False)
        self.window.configure(width=470, height=550, bg=BG_COLOR)

        # head
        head_label = Label(self.window, bg=BG_COLOR, fg=TEXT_COLOR, text="Welcome!", font=FONT_BOLD, pady=10)
        head_label.place(relwidth=1)

        # tiny divider
        line = Label(self.window, width=450, bg=BG_GRAY)
        line.place(relwidth=1, rely=0.07, relheight=0.012)

        # text widget
        self.text_widget = Text(self.window, width=20, height=2, bg=BG_COLOR, fg=TEXT_COLOR, font=FONT, padx=5, pady=5)
        self.text_widget.place(relheight=0.745, relwidth=1, rely=0.08)
        self.text_widget.configure(cursor="arrow", state=DISABLED)

        # scroll bar
        scrollBar = Scrollbar(self.text_widget)
        scrollBar.place(relheight=1, relx=0.974)
        scrollBar.configure(command=self.text_widget.yview)

        # button label
        bottom_label = Label(self.window, bg=BG_GRAY, height=80)
        bottom_label.place(relwidth=1, rely=0.825)

        # msg bpx
        self.msg_box = Entry(bottom_label, bg="#2C3E50", font=FONT, fg=TEXT_COLOR)
        self.msg_box.place(relwidth=0.74, relheight=0.06, rely=0.008, relx=0.011)
        self.msg_box.focus()
        self.msg_box.bind("<Return>", self._on_enter_pressed)

        # send btn
        send_button = Button(bottom_label, text="SEND", font=FONT_BOLD, width=20, bg=BG_GRAY, command= lambda: self._on_enter_pressed(None))
        send_button.place(relx=0.77, rely=0.008, relheight=0.06, relwidth=0.22)
        send_button.configure(cursor="cross")

    def _on_enter_pressed(self, event):
        msg= self.msg_box.get()
        self._insert_msg(msg, "You")
    
    def _insert_msg(self, msg, sender):
        if not msg:
            return
        self.msg_box.delete(0, END)
        msg1 = f"{sender}: {msg}\n\n"
        self.text_widget.configure(cursor="arrow", state=NORMAL)
        self.text_widget.insert(END, msg1)
        self.text_widget.configure(cursor="arrow", state=DISABLED)

        msg2 = f"{bot_name}: {get_response(msg)}\n\n"
        self.text_widget.configure(cursor="arrow", state=NORMAL)
        self.text_widget.insert(END, msg2)
        self.text_widget.configure(cursor="arrow", state=DISABLED)
        self.text_widget.see(END)
    
    def run(self):
        self.window.mainloop()


if __name__=="__main__":
    app = ChatApplication()
    app.run()