import threading

class BankAccount(object):
    def __init__(self):
        self.balance = 0
        self.status = CLOSED_STATUS
        self.lock = threading.Lock()

    def get_balance(self):
        self.check_status()
        return self.balance

    def open(self):
        if self.status == OPEN_STATUS:
            raise ValueError("This account is already in open status.")
        else:
            self.status = OPEN_STATUS

    def deposit(self, amount):
        self.check_status()

        if amount > 0:
            self.lock.acquire()
            self.balance += amount
            self.lock.release()
        else:
            raise ValueError("Sorry, you must deposit a positive amount.")

    def withdraw(self, amount):
        self.check_status()

        if self.balance - amount >= 0 and amount >= 0 :
            self.lock.acquire()
            self.balance -= amount
            self.lock.release()
        else:
            raise ValueError("Sorry, you can't withdraw that amount. You have %s in your account and must withdraw a positive amount" % self.balance)

    def close(self):
        if self.status == OPEN_STATUS:
            self.status = CLOSED_STATUS
            self.balance = 0
        else:
            raise ValueError("Sorry! That account has already been closed.")

    def check_status(self):
        if self.status == CLOSED_STATUS:
            raise ValueError("Sorry! This account has been closed.")


OPEN_STATUS = "open"
CLOSED_STATUS = "closed"
