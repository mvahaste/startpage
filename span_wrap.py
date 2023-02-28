while True:
    try:
        title = input("title: ")
        out = ""

        for c in title:
            out += f"<span>{c}</span>"

        print(f"{out}\n")
    except KeyboardInterrupt:
        print("\rexit  ")
        break
