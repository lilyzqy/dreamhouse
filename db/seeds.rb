# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all
Picture.destroy_all

user_list = [
  [
    "Linda",
    "linda@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511987118/christopher-campbell-40410_sgidrc.jpg",
    "sjsjsskk",
    false
  ],[
    "Racheal Lui",
    "racheal@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511992728/rachel-pfuetzner-398033_e4sbbo.jpg",
    "password",
    true
  ],[
    "Joyce Smith",
    "joyce@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511987115/joe-gardner-149699_uw1wtf.jpg",
    "fsfregrtg",
    true
  ],[
    "Maria",
    "maria@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511993218/dane-deaner-327695_xbkbyl.jpg",
    "frefre",
    false
  ],[
    "Michael Williams",
    "mi@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511993369/clem-onojeghuo-151794_aoxkyx.jpg",
    "isudihdi",
    true
  ],[
    "Katherine Hill",
    "kk@gmail.com",
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511996052/janko-ferlic-196248_n4k9ss.jpg",
    "password",
    true
  ]
]

user_list.each do |username, email, image_url, password, designer|
  User.create(username: username, email: email, image_url: image_url, password: password, designer: designer)
end

project_list = [
  [
    "First Project",
    "MA",
    "Boston",
    3
  ],[
    "Down Town SF",
    "CA",
    "San Francisco",
    2
  ],[
    "Kitchens",
    "CA",
    "San Francisco",
    2
  ],[
    "Big House",
    "CA",
    "San Mateo",
    2
  ],[
    "Height",
    "CA",
    "Malibu",
    6
  ],[
    "Nora",
    "CA",
    "Malibu",
    6
  ],[
    "Designed Album",
    "CO",
    "Denver",
    5
  ]
]

project_list.each do |title, state, city, user_id|
  Project.create( title: title, state: state, city: city, user_id: user_id)
end

picture_list = [
  [
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985317/8bc1dbfb8f7a9b57ca66b11f4eef66e5_m0bqxy.jpg",
    1
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511988089/ffa133c3084b3f91_5343-w500-h666-b0-p0--_qdaxim.jpg",
    1
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985328/neonbrand-381354_cqosd8.jpg",
    1
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985330/959abb4daf2da0f1e3515a240dafcc82_d61ott.jpg",
    2
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511988090/0ac0e555c59d3835b06fe3f47fe3134d--grey-subway-tiles-gray-tiles_sjxw8r.jpg",
    2
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985352/aaron-huber-401200_hsonqz.jpg",
    3
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985327/naomi-hebert-188443_sta0vz.jpg",
    3
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985321/175f4d1ab52f8743c1ab83bc7bc00f5f_vqzp0m.jpg",
    3
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985186/jason-briscoe-332508_iuhvgw.jpg",
    4
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985375/jason-briscoe-332507_w3zqco.jpg",
    4
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511994999/Screen_Shot_2017-11-29_at_2.35.15_PM_gktiyy.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995014/Screen_Shot_2017-11-29_at_2.33.39_PM_fjpluh.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995009/Screen_Shot_2017-11-29_at_2.33.25_PM_xjjsw8.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511994999/Screen_Shot_2017-11-29_at_2.34.09_PM_bmzm2q.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995023/Screen_Shot_2017-11-29_at_2.35.00_PM_apnhjt.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995007/Screen_Shot_2017-11-29_at_2.33.53_PM_tqn5rz.png",
    5
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995579/Screen_Shot_2017-11-29_at_2.44.30_PM_grdx4c.png",
    6
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995577/Screen_Shot_2017-11-29_at_2.44.03_PM_jig48t.png",
    6
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995574/Screen_Shot_2017-11-29_at_2.45.04_PM_ngfkbu.png",
    6
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511995575/Screen_Shot_2017-11-29_at_2.43.36_PM_ce2tmi.png",
    6
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985347/kyle-head-364351_kvetny.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985324/JohnLewis3_EL_12apr12_pr_b_on3z0i.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511988088/9bf9e5970b75971d1cb18ab8fcdac586_swmybv.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985288/pexels-photo-271743_lw7bsb.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985302/man-pan-400429_hnhfjh.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985108/justin-schuler-253611_qyv7cs.jpg",
    7
  ],[
    "http://res.cloudinary.com/dreamhousesf/image/upload/v1511985314/dd474340c56ae0d24cd54486bdc7e25c_oqioyk.jpg",
    7
  ]
]

picture_list.each do |image_url, project_id|
  Picture.create(image_url: image_url, project_id: project_id)
end
