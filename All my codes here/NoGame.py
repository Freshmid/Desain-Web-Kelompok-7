import pygame
import random

pygame.init()
w_width = 880
w_height = 640
window = pygame.display.set_mode((w_width,w_height))
pygame.display.set_caption("NoGame")

# Colors
color1 = (241,236,195)
color2 = (201,216,182)
color3 = (87,131,123)
color4 = (81, 94, 99)
color5 = (245,71,72)
white = (255,255,255)
black = (0,0,0)

# Timer color
color6 = (135,168,164)
color7 = (236,239,164)


# Coordinate
x1 = 202
y1 = 22
x = []
y = []
for _ in range(9):
    x.append(x1)
    y.append(y1)
    x1 += 75
    y1 += 75

# RnG guess coordinate
rng_range = 20
rand = []

# font
font1 = pygame.font.Font(None,50)
font2 = pygame.font.Font(None,30)
timer_font = pygame.font.Font(None,60)

# time
clock = pygame.time.Clock()
t = 0
T_bar = 0


# condition
show_darkblock = False
start_guess = False
guess = False
start_timer = False

# guess
wrong_guess = []
right_guess = []
right_count = 0
point = 0
stop = True



def background():
    background = pygame.draw.rect(window,(color3),(0,0,w_width,w_height))
    left_menu = pygame.draw.rect(window,(color1),(0,0,180,w_height))
    menu_line = pygame.draw.rect(window,(color2),(175,0,5,w_height))
    main_box_bg = pygame.draw.rect(window,(color2),(200,20,600,600))
    side_menu = pygame.draw.rect(window,(color2),(0,20,40,520))
    logo_border = pygame.draw.rect(window,(color2),(0,0,175,145))
    logo_bg = pygame.draw.rect(window,(color6),(5,5,170,135))
    point_bg = pygame.draw.rect(window,(white),(0,530,175,120))

def main_box(xin, yin, color):
    main_guess_box = pygame.draw.rect(window,color,(xin,yin,71,71))

def mouse_pos():
    mouse_position = pygame.mouse.get_pos()
    return mouse_position

def rng():
    for _ in range(rng_range):
        pick = (random.randint(0,7), random.randint(0,7))
        while pick in rand:
            pick = (random.randint(0,7), random.randint(0,7))
        rand.append(pick)

def picked_block(item, color):
    for i in item:
        main_box(x[i[0]],y[i[1]], color)

def timer_bar():
    timer_border = pygame.draw.rect(window,white,(820,20,45,600))
    timer_bg = pygame.draw.rect(window,color4,(825,25,35,590))
    timer_bar = pygame.draw.rect(window,color7,(825,625-T_bar,35,0+T_bar-5))


while True:
    dt = clock.tick_busy_loop(120)
    background()
    timer_bar()

    # start button
    Start_box_border = pygame.draw.rect(window,(color2),(25,145,140,50))
    Start_box = pygame.draw.rect(window,(color3),(30,150,130,40))
    Start_text = window.blit(font1.render("Start",True, white),(55,153))

    # point
    point_text = window.blit(font2.render("Poin:",True, (41, 54, 59)),(20,600))
    point_count = window.blit(font2.render(f"{point}",True, (41, 54, 59)),(80,600))
    guess_text = window.blit(font2.render("Guessed:",True, (41, 54, 59)),(20,550))
    div = window.blit(font2.render("/",True, (41, 54, 59)),(137,550))
    right_text = window.blit(font2.render(f"{right_count}",True, (41, 54, 59)),(115,550))
    tot_point = window.blit(font2.render(f"{rng_range}",True, (41, 54, 59)),(145,550))
    

    for i in range(len(x)-1):
        for j in range(len(y)-1):
            main_box(x[i],y[j], white)

    if show_darkblock:
        if t <= 6000:
            # timer
            t += 1 * dt
            T_bar = t/10
            picked_block(rand, color4)
        else:
            show_darkblock = False
            start_guess = True
            start_timer = True
    
    if start_timer:
        if t >= 0:
            t -= 0.5*dt
            T_bar = t/10
        else:
            stop = True
            start_timer = False

    if start_guess:
        if len(right_guess) != 0:
            picked_block(right_guess, color4)
        if len(wrong_guess) != 0:
            picked_block(wrong_guess, color5)
    
    if right_count == rng_range:
        stop = True

    for event in pygame.event.get():
        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_position = mouse_pos()
            mx = mouse_position[0]
            my = mouse_position[1]
            if mx >= 30 and mx <= 160:
                if my >= 150 and my <= 190:
                    t = 0
                    stop = False
                    point = 0
                    show_darkblock = False
                    right_count = 0
                    rand.clear()
                    right_guess.clear()
                    wrong_guess.clear()
                    rng()
                    show_darkblock = True
            elif not stop:
                if start_guess:
                    guess = False
                    for i in rand:
                        if i not in right_guess:
                            if mx >= x[i[0]] and mx <= x[i[0]+1]:
                                if my >= y[i[1]] and my <= y[i[1]+1]:
                                    right_guess.append(i)
                                    right_count += 1
                                    point += 1
                                    guess = True
                                    pass
                    if not guess:
                        for i in range(len(x)-1):
                            for j in range(len(y)-1):
                                if (i,j) not in rand and (i,j) not in wrong_guess:
                                    if mx >= x[i] and mx <= x[i+1]:
                                        if my >= y[j] and my <= y[j+1]:
                                            point -= 1
                                            wrong_guess.append((i,j))
                                            pass
                
        
            # print(mouse_position)
        if event.type == pygame.QUIT:
            quit()
    pygame.display.flip()

pygame.display.flip()
