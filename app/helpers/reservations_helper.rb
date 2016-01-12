module ReservationsHelper
  def table id, image, style
    stylestr = style.map{|k,v| "#{k}: #{v}px"}.join("; ")
    image_tag image, class: "table", style: stylestr, data: { table: id }
  end
end
